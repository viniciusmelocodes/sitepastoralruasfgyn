"use client";

import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "pwa-install-prompt-dismissed";
const DISMISS_MS = 1000 * 60 * 60 * 24 * 7;

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function isIos(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return true;
  return navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(display-mode: standalone)").matches) return true;
  return Boolean(
    (navigator as Navigator & { standalone?: boolean }).standalone,
  );
}

function wasDismissedRecently(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const t = Number.parseInt(raw, 10);
    if (Number.isNaN(t)) return false;
    return Date.now() - t < DISMISS_MS;
  } catch {
    return false;
  }
}

export function InstallAppPrompt() {
  const [mounted, setMounted] = useState(false);
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(
    null,
  );
  const [visible, setVisible] = useState(false);
  const [installing, setInstalling] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isStandalone()) return;
    if (wasDismissedRecently()) return;

    const android = /Android/i.test(navigator.userAgent);

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);

    if (isIos() || android) {
      setVisible(true);
    }

    return () =>
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
  }, [mounted]);

  const handleInstall = useCallback(async () => {
    if (!deferred) return;
    setInstalling(true);
    try {
      await deferred.prompt();
      await deferred.userChoice;
    } finally {
      setInstalling(false);
      setDeferred(null);
      setVisible(false);
    }
  }, [deferred]);

  const handleDismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    setVisible(false);
  }, []);

  if (!mounted || !visible || isStandalone()) return null;

  const showIosHelp = isIos() && !deferred;

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      p="3"
      style={{ zIndex: 50, pointerEvents: "auto" }}
    >
      <Card size="2">
        <Flex direction="column" gap="3">
          <Flex justify="between" align="start" gap="3">
            <Text weight="bold" size="3">
              Instalar no celular
            </Text>
            <Button variant="ghost" size="1" color="gray" onClick={handleDismiss}>
              Fechar
            </Button>
          </Flex>
          {deferred ? (
            <Text size="2" color="gray">
              Adicione este site à tela inicial para abrir como um app, mesmo
              offline (conforme o navegador).
            </Text>
          ) : showIosHelp ? (
            <Text size="2" color="gray">
              No <strong>Safari</strong>, toque em{" "}
              <strong>Compartilhar</strong> e escolha{" "}
              <strong>Adicionar à Tela de Início</strong>.
            </Text>
          ) : (
            <Text size="2" color="gray">
              No Chrome ou Edge no Android, use o menu{" "}
              <strong>⋮</strong> e toque em <strong>Instalar app</strong> ou{" "}
              <strong>Adicionar à tela inicial</strong>.
            </Text>
          )}
          {deferred ? (
            <Button
              onClick={handleInstall}
              disabled={installing}
              size="3"
              highContrast
            >
              {installing ? "Instalando…" : "Instalar aplicativo"}
            </Button>
          ) : null}
        </Flex>
      </Card>
    </Box>
  );
}

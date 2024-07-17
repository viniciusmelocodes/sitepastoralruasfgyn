"use client";

import { Button, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OracaoHumildadePage() {
  const router = useRouter();
  const [tamanhoFonte, setTamanhoFonte] = useState(16);

  const handleFontSize = (fontSize: number) => {
    if (tamanhoFonte + fontSize > 14 && tamanhoFonte + fontSize < 40) {
      setTamanhoFonte((prevSize) => prevSize + fontSize);
    }
  };

  const handleNextPage = () => {
    router.push("/");
  };

  return (
    <>
      <div className="container mx-auto mt-4">
        <Flex mt="4" gap="3">
          <Button
            onClick={(fontSize) => {
              handleFontSize(-2);
            }}
          >
            Diminuir texto
          </Button>
          <Button
            onClick={(fontSize) => {
              handleFontSize(2);
            }}
          >
            Aumentar texto
          </Button>
        </Flex>
      </div>
      <div className="container mx-auto bg-cyan-100 rounded-xl p-2 m-4">
        <p className="p-4 text-2xl text-center">Oração da Humildade</p>
      </div>
      <div
        className="container mx-auto p-4 text-justify"
        style={{ fontSize: `${tamanhoFonte}px` }}
      >
        <p className="mt-6">P: Ó Jesus, manso e humilde de coração.</p>
        <p>
          Todos: <b>Ouvi-me!</b>
        </p>
        <p className="mt-6">P: Do desejo de ser estimado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do desejo de ser amado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do desejo de ser conhecido.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do desejo de ser honrado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do desejo de ser louvado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do desejo de ser preferido.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do desejo de ser consultado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do desejo de ser aprovado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do desejo de ser humilhado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do desejo de ser desprezado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do receio de sofrer repulsas.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do receio de ser caluniado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do receio de ser esquecido.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do receio de ser ridicularizado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do receio de ser difamado.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Do receio de ser objeto de suspeita.</p>
        <p>
          Todos: <b>Livrai-me, ó Jesus!</b>
        </p>
        <p className="mt-6">P: Que os outros sejam amados mais do que eu.</p>
        <p>
          Todos: <b>Jesus, dai-me a graça de desejá-lo!</b>
        </p>
        <p className="mt-6">P: Que os outros sejam estimados mais do que eu.</p>
        <p>
          Todos: <b>Jesus, dai-me a graça de desejá-lo!</b>
        </p>
        <p className="mt-6">
          P: Que os outros possam elevar-se na opinião do mundo, e que eu possa
          ser diminuído.
        </p>
        <p>
          Todos: <b>Jesus, dai-me a graça de desejá-lo!</b>
        </p>
        <p className="mt-6">
          P: Que os outros possam ser escolhidos e eu posto de lado.
        </p>
        <p>
          Todos: <b>Jesus, dai-me a graça de desejá-lo!</b>
        </p>
        <p className="mt-6">
          P: Que os outros possam ser louvados e eu desprezado.
        </p>
        <p>
          Todos: <b>Jesus, dai-me a graça de desejá-lo!</b>
        </p>
        <p className="mt-6">
          P: Que os outros possam ser preferidos a mim em todas as coisas.
        </p>
        <p>
          Todos: <b>Jesus, dai-me a graça de desejá-lo!</b>
        </p>
        <p className="mt-6">
          P: Que os outros possam ser mais santos do que eu, embora me torne o
          mais santo quanto me for possível.
        </p>
        <p>
          Todos: <b>Jesus, dai-me a graça de desejá-lo!</b>
        </p>
        <p className="mt-6 text-center">
          P: Permaneçamos selados com um Deus que é Pai, Filho e Espiríto Santo.
        </p>
        <p className="mt-6 text-center">
          Todos: <b>Amém!</b>
        </p>
        <hr className="mt-4" />
        <p className="mt-4 mb-9 text-center">
          <Button onClick={handleNextPage} color="blue">
            Voltar Para Oração Anterior
          </Button>
        </p>
      </div>
    </>
  );
}

"use client";

import { Button, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [tamanhoFonte, setTamanhoFonte] = useState(20);

  const handleFontSize = (fontSize: number) => {
    if (tamanhoFonte + fontSize > 18 && tamanhoFonte + fontSize < 40) {
      setTamanhoFonte((prevSize) => prevSize + fontSize);
    }
  };

  const handleNextPage = () => {
    router.push("/oracao-humildade");
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
            Diminuir tamanho do texto
          </Button>
          <Button
            onClick={(fontSize) => {
              handleFontSize(2);
            }}
          >
            Aumentar tamanho do texto
          </Button>
        </Flex>
      </div>
      <div className="container mx-auto bg-cyan-100 rounded-xl p-2 mt-4 mb-4">
        <p className="p-4 text-2xl text-center">Oração de Purificação</p>
      </div>
      <div
        className="container mx-auto"
        style={{ fontSize: `${tamanhoFonte}px` }}
      >
        <p>
          <b>
            Eu, em nome de Jesus, ordeno que saiam de mim, de minha casa, de
            minha família (cônjuge, filhos, ...) e dos meus amigos de
            Comunidade, todas as forças espirituais do mal que possam ter nos
            contaminado, e ordeno que vão se prostrar aos pés da Cruz do Senhor
            Jesus e os proíbo de voltar.
          </b>
        </p>
        <p className="mt-6">
          <b>
            Que saiam também agora, toda a fúria do inimigo e todo o dardo
            inflamado lançado contra nossos bens materiais, contra nosso
            organismo físico, contra nossa mente ou nosso espírito.
          </b>
        </p>
        <p className="mt-6">
          <b>
            Neste momento, Senhor Jesus, eu me lavo com Teu sangue
            preciosíssimo, e também lavo Nele todas as pessoas que comigo
            convivem. Teu sangue seja para nós cobertura e proteção, e que o
            Divino Espírito Santo renove em cada um de nós Sua unção, Sua força
            e Seu poder. Pela poderosa intercessão da Virgem Maria, de seus
            Anjos e Santos. Amém!
          </b>
        </p>
        <p className="mt-6">
          <i>
            <b>
              "A Cruz Sagrada seja minha luz! Não seja o dragão o meu guia!
              Retira-te satanás, nunca me aconselhes coisas vãs, é mau o que tu
              ofereces. Bebe tu mesmo o teu próprio veneno!"
            </b>
          </i>
        </p>
        <hr className="mt-4" />
        <p className="mt-4 mb-9 text-center">
          <Button onClick={handleNextPage} color="blue">
            Ir Para Próxima Oração
          </Button>
        </p>
      </div>
    </>
  );
}

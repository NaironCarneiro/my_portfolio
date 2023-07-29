import Image from "next/image";

import htmlImage from "/public/assets/html-5.png";
import cssImage from "/public/assets/css-3.png";
import reduxImage from "/public/assets/redux.png";
import tailwindImage from "/public/assets/tailwindcss.png";
import javascriptImage from "/public/assets/javascript.png";
import typescriptImage from "/public/assets/typescript.png";
import nextImage from "/public/assets/nextjs.png";
import nodeImage from "/public/assets/nodejs.png";
import reactImage from "/public/assets/reactjs.png";
import reacttestintImage from "/public/assets/react-testing.png";
import whatsappImage from "/public/assets/whatsapp-2.png";
import emailImage from "/public/assets/e-mail.png";
import githubImage from "/public/assets/github-sign.png";
import linkedinImage from "/public/assets/linkedin.png";
import phoneImage from "/public/assets/phone.png";
import naironImage from "/public/assets/nairon.png";
import nairon2Image from "/public/assets/nairon2.png";
import gitImage from "/public/assets/git-250.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className=" flex flex-row justify-between">
        <div>
          <p className=" text-5xl">Olá, sou</p>
          <p className="text-sky-400 font-bold text-5xl leading-2 mt-5">
            Nairon Carneiro
          </p>
          <p className=" text-2xl text-gray-400 mt-5">
            Desenvolvedor Front-End
          </p>
        </div>
        <div className=" mr-24">
          <Image
            src={nairon2Image}
            alt="Imagem Nairon"
            width={400}
            height={400}
            className="absolute z-10"
          />
          <div className=" w-96  h-40 rounded-xl bg-sky-400 mt-36 z-10  -skew-x-12 ... "></div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center mt-14">
        <p className=" text-3xl text-white font-semibold mb-6">Sobre mim</p>
        <p className=" text-lg text-gray-400 text-center">
          Sou um desenvolvedor front-end apaixonado por criar experiências
          incríveis para o usuário. Minha experiência em HTML, CSS, TypeScript,
          desenvolvimento ágil, testes unitários e bibliotecas e frameworks
          modernos como React e NextJS, me permite criar soluções dinâmicas e
          interativas para projetos web. Além disso, estou sempre buscando
          aprimorar minhas habilidades em design responsivo, acessibilidade e
          performance para garantir que as interfaces que eu crio sejam
          eficientes e eficazes para todos os usuários. Eu adoro trabalhar em
          equipe e colaborar em projetos desafiadores que envolvam tecnologias
          inovadoras. Estou cursando atualmente o Mestrado em Engenharia de
          informática com foco em Engenharia de Software no ISEP-Porto, afim de
          buscar conhecimento maior sobre a área e encarar novos desafios.
        </p>
      </div>

      <div className=" flex flex-col items-center justify-center mt-14">
        <p className=" text-3xl text-white font-semibold mb-6">Habilidades</p>
        <div className=" flex flex-wrap flex-raw justify-center gap-6">
          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image src={htmlImage} alt="Imagem HTML" width={60} height={60} />
            <span className=" text-sm mt-2 text-black font-medium">HTML5</span>
          </div>

          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image src={cssImage} alt="Imagem CSS" width={60} height={60} />
            <span className=" text-sm mt-2 text-black font-medium">CSS3</span>
          </div>

          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image src={reactImage} alt="Imagem React" width={60} height={60} />
            <span className=" text-sm mt-2 text-black font-medium">
              React.js
            </span>
          </div>

          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image
              src={tailwindImage}
              alt="Imagem Tailwind CSS"
              width={60}
              height={60}
            />
            <span className=" text-sm mt-2 text-black font-medium">
              Tailwind CSS
            </span>
          </div>

          <div className="flex flex-col items-center justify-center bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image
              src={javascriptImage}
              alt="Imagem Javascript"
              width={72}
              height={72}
              className=" rounded-3xl"
            />
            <span className=" text-sm mt-1 mb-1 text-black font-medium">
              Javascript
            </span>
          </div>

          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image
              src={typescriptImage}
              alt="Imagem Typescript"
              width={60}
              height={60}
            />
            <span className=" text-sm mt-2 text-black font-medium">
              Typescript
            </span>
          </div>

          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image src={reduxImage} alt="Imagem Redux" width={60} height={60} />
            <span className=" text-sm mt-2 text-black font-medium">Redux</span>
          </div>

          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image src={nextImage} alt="Imagem Next" width={60} height={60} />
            <span className=" text-sm mt-2 text-black font-medium">
              Next.js
            </span>
          </div>

          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image
              src={reacttestintImage}
              alt="Imagem React Testing"
              width={70}
              height={70}
            />
            <span className=" text-sm mt-2 text-black font-medium">
              React Testing
            </span>
          </div>

          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image
              src={githubImage}
              alt="Imagem Github"
              width={70}
              height={70}
            />
            <span className=" text-sm mt-2 text-black font-medium">GitHub</span>
          </div>

          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image src={gitImage} alt="Imagem Git" width={70} height={70} />
            <span className=" text-sm mt-2 text-black font-medium">Git</span>
          </div>
          <div className="flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-28 h-28 mt-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <Image src={nodeImage} alt="Imagem Node" width={60} height={60} />
            <span className=" text-sm mt-2 text-black font-medium">
              Node.js
            </span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center mt-14">
        <p className=" text-3xl text-white font-semibold">Projetos</p>

        <div className=" border border-sky-300 space-y-2 p-6 mt-8">
          <h2>Aplicação Web onde lista os filmes mais bem avaliados</h2>
          <p className="text-gray-400">
            Este projeto usa a biblioteca React para consumir uma lista de
            filmes mais bem avaliados da API MovieDB. No mesmo pode ser visto os
            detalhes do filme.
          </p>
          <a
            className=" text-sky-400"
            href="https://github.com/NaironCarneiro/Project_React_API_Filmes"
            target="_blank"
          >
            Ver mais
          </a>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center mt-14">
        <p className=" text-3xl text-white font-semibold">
          Experiência profissional
        </p>
        <div className="flex flex-col mt-8">
          <h2>Desenvolvedor Front-end na Zenvia</h2>
          <span className=" flex items-center text-gray-400 mt-2 text-sm">
            Jun 2022 - Jan 2023 &nbsp;
            <div className=" inline-block w-1 h-1 bg-gray-400"></div>
            &nbsp; Estágio
          </span>
          <hr className=" mt-6 bg-gray-400 opacity-40" />
          <div className=" flex flex-col justify-start mt-6 space-y-1">
            <span className=" text-gray-400">
              - Desenvolvimento e melhoria de interfaces com HTML, CSS e
              JavaScript.
            </span>
            <span className=" text-gray-400">
              - Utilização de bibliotecas e frameworks front-end, como React,
              Next.js e Styled-Components.
            </span>
            <span className=" text-gray-400">
              - Integração de interfaces com Back End e APIs.
            </span>
            <span className=" text-gray-400">
              - Resolução de problemas e depuração de código.
            </span>
            <span className=" text-gray-400">
              - Colaboração efetiva em equipe e comunicação profissional.
            </span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center mt-14">
        <p className=" text-3xl text-white font-semibold">Contatos</p>

        <div className="  flex flex-wrap flex-raw justify-center gap-10 mt-8">
          <a
            href="https://www.linkedin.com/in/nairon-santos-carneiro-7103a9157/"
            target="_blank"
          >
            <div className=" flex flex-col items-center justify-center cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
              <div className=" flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-14 h-14 mt-4 mb-2 ">
                <Image
                  src={linkedinImage}
                  alt="Imagem Linkedin"
                  width={40}
                  height={40}
                />
              </div>
              <span className=" text-sm  text-gray-400  font-medium">
                @NaironCarneiro
              </span>
            </div>
          </a>

          <a href="https://github.com/NaironCarneiro" target="_blank">
            <div className=" flex flex-col items-center justify-center cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
              <div className=" flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-14 h-14 mt-4 mb-2 ">
                <Image
                  src={githubImage}
                  alt="Imagem Github"
                  width={40}
                  height={40}
                />
              </div>
              <span className=" text-sm text-gray-400  font-medium">
                @NaironCarneiro
              </span>
            </div>
          </a>
          <div className=" flex flex-col items-center justify-center cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <div className=" flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-14 h-14 mt-4 mb-2 ">
              <Image
                src={emailImage}
                alt="Imagem E-Mail"
                width={40}
                height={40}
              />
            </div>
            <span className=" text-sm text-gray-400  font-medium ">
              nayronscarneiro@hotmail.com
            </span>
          </div>

          <div className=" flex flex-col items-center justify-center cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <div className=" flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-14 h-14 mt-4 mb-2 ">
              <Image
                src={phoneImage}
                alt="Imagem Telefone"
                width={40}
                height={40}
              />
            </div>
            <span className=" text-sm text-gray-400  font-medium">
              (99) 9 99649-0093
            </span>
          </div>

          <div className=" flex flex-col items-center justify-center cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-200 ...">
            <div className=" flex flex-col items-center justify-center  bg-sky-400 rounded-sm w-14 h-14 mt-4 mb-2 ">
              <Image
                src={whatsappImage}
                alt="Imagem Whatsapp"
                width={40}
                height={40}
              />
            </div>
            <span className=" text-sm text-gray-400  font-medium">
              (99) 9 99649-0093
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

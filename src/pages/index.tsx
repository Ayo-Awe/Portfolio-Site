import App from "@/components/App";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Awe - Software Engineer</title>
        <meta
          key="keywords"
          name="keywords"
          content={`Awe, aweayo.com, Awe Ayomidipupo, Ayomidipupo, Awe Ayo, Software Engineer, HNG`}
        />
        <meta
          key="description"
          name="description"
          content={
            "My name is Awe Ayomidipupo and I love solving tomorrow's problems using software"
          }
        />
        <meta
          key="og-title"
          property="og:title"
          content={"Awe's portfolio site"}
        />
        <meta
          key="og-image"
          property="og:image"
          content={"https://aweayo.tech/preview.png"}
        />
        <meta
          key="og-description"
          property="og:description"
          content={"Connect with Awe Ayomidipupo"}
        />
        <meta key="og-url" property="og:url" content={`https://aweayo.tech`} />
        <meta
          key="twitter-title"
          name="twitter:title"
          content={"Awe's portfolio site"}
        />
        <meta
          key="twitter-description"
          name="twitter:description"
          content={
            "My name is Awe Ayomidipupo and I love solving tomorrow's problems using software"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lighter_app" />
        <meta
          name="twitter:image"
          content={`https://aweayo.tech/preview.png`}
        />
      </Head>
      <App />
    </main>
  );
}

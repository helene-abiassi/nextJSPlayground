import NavBar from "@/components/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <p>Everything everywhere all at once</p> */}
        <NavBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

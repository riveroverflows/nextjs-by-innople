import {Button} from '@/components/ui/button'
import Image from "next/image";
import {ItemComponent} from "@/components/item-component";
import { ApolloWrapper } from "./ApolloWrapper";


export default function Home() {
  return (
    <main>
      <body>
      <ApolloWrapper><ItemComponent></ItemComponent></ApolloWrapper>
      </body>
    </main>
  );
}

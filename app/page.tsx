'use client'
import { useEffect, useState } from "react";
import { getProducts } from "./api/graphql";
import { Query } from './api/graphql-type'


export default function Home() {
  const [result, setresult] = useState<any[]>([])

  useEffect(() => {
    async function loadData() {
      const { articlesConnection } = await getProducts() as Query;
      setresult(articlesConnection.edges);
    }

    loadData();
  }, [])
  return (
    <div className="">
      {
        JSON.stringify(result)
      }
    </div>
  );
}

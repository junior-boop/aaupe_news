'use client'
import { useEffect, useState } from "react";
import { getProducts } from "../api/graphql";
import { Content_Query, Query } from "../api/graphql-type";
import { RiArrowRightLine, RiArrowRightUpLine } from "@/components/icons";
import Link from "next/link";

export default function Actualites() {
    const [result, setresult] = useState<any[]>([])

    useEffect(() => {
        async function loadData() {
            const { articlesConnection } = await getProducts() as Query;
            setresult(articlesConnection.edges);
        }



        loadData();
    }, [])
    return (
        <>
            <div className="absolute z-0 h-[50vh] bg-[#D1EDFC] w-full"></div>
            <div className="relative z-[1] pt-32">
                <div className="w-full lg:max-w-[1280px] mx-auto  ">
                    <div className="grid grid-cols-3 gap-4">
                        {
                            result.map((el, key) => {
                                if (key === 0) {
                                    return <First_Element data={el.node} key={key} />
                                }

                                return <Element data={el.node} key={key} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

type element = {
    data: any
}



function First_Element({ data }: element) {
    const title: string = data.title as string
    const image: string = data.picture.url
    const slug = data.titleSlug

    const content = data.content.raw.children
    const paragraph = content.filter((el: any) => el.type === 'paragraph')
    const desc = paragraph[0].children[0].text.length > 100 ? `${paragraph[0].children[0].text.substring(0, 120)}...` : paragraph[0].children[0].text
    return (
        <Link href={`https://aaupe.org.ma/actualites/article?slug=${slug}`} className="flex lg:col-span-3 mb-9">
            <div className="w-full bg-cover bg-no-repeat bg-center aspect-[16/7] flex justify-end" style={{ backgroundImage: `url(${image})` }}>
                <div className="lg:w-[400px] bg-[#000a] px-9 py-8 h-full flex justify-between flex-col">
                    <div>
                        <div className="font-judson text-[38px] font-bold mb-4 text-white mb-10" style={{ lineHeight: 1 }}>
                            {title}
                        </div>
                        <div className="text-white">
                            {desc}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="w-11 aspect-square flex items-center justify-center">
                            <RiArrowRightLine className="w-9 h-9 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

function Element({ data }: element) {
    const title = data.title.length > 40 ? `${data.title.substring(0, 36)}...` : data.title
    const image = data.picture.url
    const content = data.content.raw.children
    const slug = data.titleSlug


    const paragraph = content.filter((el: any) => el.type === 'paragraph')
    const desc = paragraph[0].children[0].text.length > 100 ? `${paragraph[0].children[0].text.substring(0, 95)}...` : paragraph[0].children[0].text


    return (
        <Link href={`https://aaupe.org.ma/actualites/article?slug=${slug}`}>
            <div className="aspect-[3/2] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="px-6 py-4 bg-slate-100">
                <div className="font-judson text-[32px] font-bold first-letter:uppercase mb-4" style={{ lineHeight: 1.2 }}>
                    {title}
                </div>
                <div className="mb-4">
                    {desc}
                </div>
                <div className=" flex items-center justify-end">
                    <button className=" w-11 aspect-square flex items-center justify-center">
                        <RiArrowRightUpLine className="w-9 h-6" />
                    </button>
                </div>
            </div>

        </Link >
    )
}


// /actualites/article?slug=${slug}
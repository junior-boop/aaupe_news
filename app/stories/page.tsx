import { RiArrowRightUpLine, RiDoubleQuotesL } from "@/components/icons";
import { gql } from "graphql-request";
import Link from "next/link";

import { client } from "../api/graphql";
import { doc_Query, Query, Story } from "../api/graphql-type";

export async function getData() {
    const query = gql/* GraphQL */`
        query MyQuery {
            stories(orderBy: publishedAt_DESC, stage: PUBLISHED, first: 20) {
                content {
                    raw
                    html
                }
                picture {
                    url
                    width
                    size
                    id
                }
                title
                titleSlug
                publishedBy {
                    id
                }
                publishedAt
                updatedAt
                id
                bioOf
            }
        }
    `

    const data = await client.request(query) as Story
    return data

}

export default async function Storys() {

    const { stories } = await getData()

    return (
        <>
            <div className="bg-[#060715] w-full pt-32 pb-12">
                <First_Element data={stories[0]} />
            </div>
            <div>
                {
                    stories.map((el, key) => {
                        if (key === 0) return <div key={key}></div>
                        return <Element data={el} key={el.id} />
                    })
                }
            </div>
        </>
    )
}



type first_element = {
    data: doc_Query
}

function First_Element({ data }: first_element) {

    const { content, picture, title, titleSlug, bioOf } = data


    return (
        <div className="max-w-[1280px] w-full h-full mx-auto flex gap-12">
            <Link href={`/stories/${titleSlug}`} className="flex-1 flex h-[600px] items-end">
                <div className="relative">
                    <div className="absolute z-0 top-[-55px] left-[-50px] opacity-40">
                        <RiDoubleQuotesL className="w-32 h-32 text-white" />
                    </div>
                    <div className="relative z-[2] text-[52px] font-judson font-bold text-white" style={{ lineHeight: 1 }}>{title}”</div>
                    <div className="mt-6">
                        <div className="text-white font-bold text-3xl">{bioOf}</div>
                        <div className="text-white">Découvrez sont histoire</div>
                    </div>
                    <button className="flex w-full justify-start py-6">
                        <RiArrowRightUpLine className="w-11 h-11 text-white" />
                    </button>
                </div>

            </Link>
            <div className="w-[600px] aspect-square bg-center bg-cover bg-no-repeat bg-slate-200 rounded-xl" style={{ backgroundImage: `url(${picture.url})` }}></div>
        </div>
    )
}

function Element({ data }: first_element) {
    const title = data.title.length > 40 ? `${data.title.substring(0, 36)}...` : data.title
    const image = data.picture.url
    const content = data.content.raw.children
    const slug = data.titleSlug

    console.log(slug)
    const paragraph = content.filter((el: any) => el.type === 'paragraph')
    const desc = paragraph[0].children[0].text.length > 100 ? `${paragraph[0].children[0].text.substring(0, 95)}...` : paragraph[0].children[0].text


    return (
        <Link href={`/stories/${slug}`}>
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

// /stories/article?slug=${slug}
import { getProducts } from "@/app/api/graphql";
import { article_Query } from "@/app/api/graphql-type";
import { RiArrowRightUpLine, RiFacebookCircleFill, RiInstagramFill, RiLinkedinBoxFill } from "@/components/icons"
import { gql } from "graphql-request";
import { client } from "@/app/api/graphql";

async function getData(slug: string) {
    const query = gql/* GraphQL*/`
    query MyQuery {
        article(where: {titleSlug: "${slug}"}, stage: PUBLISHED) {
            id
            publishedAt
            title
            titleSlug
            content {
                html
                raw
            }
            picture {
                width
                url
            }
        }
    }
    `
    const { article } = (await client.request(query)) as article_Query;
    return article

}

interface DataParams {
    params: {
        slug: string
    }
}


export default async function Articles({ params }: DataParams) {
    const { slug } = params
    const { titleSlug, title, picture, content } = await getData(slug)

    return (
        <div className="max-w-[1280px] w-full mx-auto pt-16">
            <div className="w-full flex items-center justify-center py-10 lg:py-16 ">
                <div className="font-judson font-bold text-[42px] lg:text-[52px] lg:w-[60%] text-center uppercase " style={{ lineHeight: 1.1 }}>
                    {title}
                </div>
            </div>
            <div className="w-full aspect-video bg-cover bg-slate-100 bg-no-repeat bg-center mb-10" style={{ backgroundImage: `url(${picture.url})` }}></div>
            <div className="lg:flex gap-11 px-6 lg:px-9">
                <div className="content" dangerouslySetInnerHTML={{ __html: content.html }}></div>
                <div>
                    <Ilot_2 />
                </div>
            </div>
        </div>
    )
}

function Ilot_2() {
    return (
        <div className="w-full lg:w-[450px]">
            <div className="w-full lg:w-[450px] bg-[#8bdbff] text-[#0b2735] px-4 py-4 lg:px-10 lg:py-10 mb-6">
                <div className="font-judson text-3xl lg:text-5xl mb-9 text-center font-bold">Nos Réseaux Sociaux</div>
                <div className="text-center mb-6 w-[90%] mx-auto" style={{ lineHeight: 1 }}>
                    Envie de rester connecté(e) à l{"'"}actualité de l{"'"}AAUPE et de ne rien manquer ? Suivez-nous sur nos réseaux sociaux !
                </div>
                <div className="flex items-center gap-9 justify-center">
                    <a href="" className="text-[#0b2735] hover:text-[#3B5998]"><RiFacebookCircleFill className="w-16 h-16 lg:w-16 lg:h-16 " /></a>
                    <a href="" className="text-[#0b2735] hover:text-[#0077B5]"><RiLinkedinBoxFill className="w-16 h-16 lg:w-16 lg:h-16 " /></a>
                    <a href="" className="text-[#0b2735] hover:text-[#132d3a]" ><RiInstagramFill className="w-16 h-16 lg:w-16 lg:h-16 " /></a>
                </div>
            </div>
            <div>
                <a href={`${process.env.URL}/impact`} className="bg-[#A3CD39] text-[#242e0a] hover:text-[#242e0a] flex items-center justify-between py-3 px-4 lg:px-6">
                    Notre Impact
                    <RiArrowRightUpLine className="w-6 h-6 lg:w-9 lg:h-9 " />
                </a>
            </div>
        </div>
    )
}
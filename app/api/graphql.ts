import "dotenv/config";
import { gql, GraphQLClient } from "graphql-request";
import { article_Query, Query } from "./graphql-type";

const endpoint =
  "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clz8cebv500gm07uspzqk3x6d/master";
const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MjI0NTI2MzksImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2x6OGNlYnY1MDBnbTA3dXNwenFrM3g2ZC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiMmY4OGUwZTUtYTkzNC00ZmQzLTgzODctMGUwODFkYTAyMDVlIiwianRpIjoiY2x6YTd0dWIwMDNxbzA3dWswaGZjaG41NSJ9.qGqJCsm6DSUZjEYN486CP8Kufa_97QuSMqKBsDHNtgehMC9D_bG94Fg0HPXBRaGlqXOtTeDrdwK0SYaqYYSeCfJRrE60ipWm0ukr6n4P9CDuW0AD3sqZun-O144jQt48qA_aupt0cFoQvfX9tDmuhiGAbU0HTlkQ9Q50xwl4AeFHJIN0I7924xROtHD5yTE5Z9lquRin1wni7dLMy7bA_iRxqYp5BgpfRbkyMLUqxAfASDijNQCXegbnUHcgmXKibAr1RRfXzbPknALM-St0d1qOs0DiT0jKYbM-2el_XCV-QQD5-62lBeH2VAkAYoiiLxhgrhMXcvQx-QShvQuns5bi8yRdvwlJdf_MqzCZJlNwfSdrn2lj9IAx2sV5yWrkOih9_xZ4o0MNZJHOm3uDGiKE5CEMdftqL4bqUu_btGqiV8wXsUfArNWjVF0WpC1-GHgnXC_k53piHFz0lxVwhjllXPRQ52VwQTF8hAYYaP09_YSn4V2xrEKaHgGPDqI2Hy1YctsfaaxBvH4Y4xfZo8BGGiT0B2inE3j0nzZ1kdfTaPPAC3YHalU3o8uNZ4hGpvYsnqcIO0beKk2mRCZRzeftBaEVeR_2WBZv-XjXaKvEOU8Y_JYAewFmPEk87XlUm6vw-s7e4kMVvCNsgYk7uBpJzukzUoBzfLMaJpUqwGs";

export const client = new GraphQLClient(endpoint, {
  headers: {
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const query = gql`
  query MyQuery {
    articlesConnection(first: 20, stage: PUBLISHED, orderBy: updatedAt_DESC) {
      edges {
        node {
          id
          title
          titleSlug
          content {
            raw
          }
          publishedAt
          picture {
            size
            url
            width
            stage
          }
        }
      }
    }
  }
`;

export async function getProducts() {
  const data = (await client.request(query)) as Query;
  return data;
}

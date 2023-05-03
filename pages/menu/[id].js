import { useRouter } from "next/router";
import DetailesPage from "@/components/templates/DetailesPage";

const Detailes = ({ data }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h2>Loading Page ...</h2>
    }
    return <DetailesPage { ...data } />
};

export default Detailes;

//getStaticPaths

export async function getStaticPaths() {
    const res = await fetch(`${process.env.BASE_URL}/data`)
    const json = await res.json()
    const data = json.slice(0, 10)
    const paths = data.map((food) => ({
        params: { id: food.id.toString() },
    }))

    return {
        paths,
        fallback: true,
    }
}
//getStaticProps

export async function getStaticProps(context) {
    const { params: { id } } = context;
    const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
    const data = await res.json();

    if (!data.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
        revalidate: +process.env.REVALIDATE,
    }

}
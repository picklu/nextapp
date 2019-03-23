import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import "../sass/main.scss";

const Index = props => (
    <Layout>
        <h1>Batman TV shows</h1>
        <ul>
            { props.shows.map(({show}) => (
                <li key={ show.id }>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{ show.name }</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('http://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`index.js => Show data fetched. Count: ${ data.length }`)

    return {
        shows: data
    }
}

export default Index;
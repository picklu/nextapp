import { withRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Page = withRouter(props => (
    <Layout>
        <h1>{ props.router.query.title }</h1>
        <p>This is the blog post content for { props.router.query.title }</p>
    </Layout>
));

export default Page;
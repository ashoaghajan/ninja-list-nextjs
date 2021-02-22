import { getNinjas } from '../api/ninjaApi';

export const getStaticPaths = async() => {
    const ninjas = await getNinjas('/users');
    const paths = ninjas.map(ninja => (
        { params: { id: ninja.id.toString() } }
    ));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const { id } = context.params;
    const ninja = await getNinjas(`/users/${id}`);
    return {
        props: { ninja }
    }
}

const Details = ({ ninja }) => {
    return ( 
        <div>
            <h1>{ ninja.name }</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>
        </div>
     );
}
 
export default Details;
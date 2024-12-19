import css from './page.module.css';
import BagsList from '../../../components/bagsList/bagsList';

export default async function Catalog() {
  const data = await fetch('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
  const dataBags = await data.json();
  // console.log(dataBags);

  return (
    <div className={css.catalog}>
      <ul>
        {dataBags.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {/* <BagsList bags={dataBags} /> */}
    </div>
  );
}

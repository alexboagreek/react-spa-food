import { Link } from 'react-router-dom';

function CategoryItem(props) {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props;
    return <div className="card">
        <div class="card">
            <div class="card-image">
            <img src={ strCategoryThumb } alt={ strCategory }/>
            
           
        </div>
        <div class="card-content">
          <p>{ strCategoryDescription.slice(0, 60) }...</p>
          <span class="card-title">{ strCategory }</span>
        </div>
        <div className="card-action">
            <Link to={`/category/${idCategory}`} className="btn">Watch category</Link>
        </div>
      </div>
    </div>
}
export { 
    CategoryItem
}
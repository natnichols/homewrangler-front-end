//css
import styles from './PantryList.module.css'

const PantryList = (props) => {
  return (  
    <main>
      <div className={`${styles.container} ${styles.formContainer}`}>
        {/* form for adding new pantry list */}
        Add New Pantry (Form)
        {/* pantry list */}
      </div>
      <div className={`${styles.container} ${styles.listContainer}`}>
        {props.pantryItems.map(pantryItem => 
          <p key={pantryItem._id}>{pantryItem.name}

          </p>  
        )}
      </div>
    </main>
  );
}
 
export default PantryList;
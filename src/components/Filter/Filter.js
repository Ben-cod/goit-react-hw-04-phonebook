import css from './Filter.module.css'


export const Filter = ({value, onChange}) => (
    <div >
    <label className={css.filterWrap} htmlFor="filter"></label>
    <input className={css.filter} type="text" id="filter" placeholder="Find contacts by name" value={value} onChange={onChange} />
  </div>
)
   

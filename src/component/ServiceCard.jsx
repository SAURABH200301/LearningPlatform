import classes from './ServiceCard.module.css'

function ServiceCard(prop) {
  return (
    <div className={classes.serviceCard}>
        <img className={classes.img} src={prop.link} alt="ljdnfal" />
        <h3>{prop.head}</h3>
        <p>{prop.para}</p>
    </div>
  )
}

export default ServiceCard
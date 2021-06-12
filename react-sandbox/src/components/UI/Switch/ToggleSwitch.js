import classes from './ToggleSwitch.module.css'

const ToggleSwitch = () => {
    const changeHandler = (event) => {
        console.log(event.target.checked)
    }

    return (
        <label className={classes.label}>
            <input type="checkbox" onChange={changeHandler} />
            <span className={[classes.slider, classes.round].join(' ')}></span>
        </label>
    )
}

export default ToggleSwitch

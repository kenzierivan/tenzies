const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#81e098" : "white",
  }

  return (
    <button onClick={() => props.hold(props.id)} style={styles}>{props.value}</button>
  )
}
export default Die
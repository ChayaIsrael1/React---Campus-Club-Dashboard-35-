// Notice - a colored box: yellow for warnings, blue for info.
import styles from './Notice.module.css'

/**
 * @param {object} props
 * @param {"warning" | "info"} props.type - the box gets styles.notice + styles.warning or styles.info
 * @param {React.ReacstNode} props.children - the text of the notice
 */
export default function Notice({ type= "info", children }) {
  return (
  <div className={`${styles.notice} ${type == "info" ? styles.info : styles.warning }`}>
    <p>{children}</p>
  </div>
  )
}

import Image from "next/image"

import styles from "./login.module.css"
function LoginPage() {
  return (
    <div className={styles.login}>
      This is the Login Page.
      <div>

      <Image alt="Image" src={"/next.svg"} height={300} width={130}/>
      </div>
    </div>
  )
}

export default LoginPage

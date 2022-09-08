import { useState } from 'react'
import styles from '../../styles/Contact.module.css'

const Contact = () => {
  const [legalConsent, setLegalConsent] = useState(false)
  const [consentError, setConsentError] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Contact</h1>
          </div>

          <form className={styles.form}>
            <label htmlFor='name' className={styles.label}>
              Your name
            </label>
            <input type='text' id='name' className={styles.text} />
            <label htmlFor='email' className={styles.label}>
              Your email
            </label>
            <input type='text' id='email' className={styles.text} />
            <label htmlFor='message' className={styles.label}>
              Message
            </label>
            <textarea id='message' rows='15' className={styles.textarea} />
            <div
              className={
                consentError
                  ? styles.checkboxContainerError
                  : styles.checkboxContainer
              }
            >
              <input
                type='checkbox'
                className={styles.checkbox}
                checked={legalConsent}
                onChange={(e) => {
                  setLegalConsent(e.target.checked)
                  setConsentError(null)
                }}
              />
              <label
                className={
                  consentError
                    ? styles.checkboxLabelError
                    : styles.checkboxLabel
                }
              >
                I grant all permissions required by law in order to send this
                email
              </label>
            </div>
            <button type='submit' className={styles.submitBtn}>
              Send message
            </button>
          </form>
          <section>
            <h2>Let's connect</h2>
            <p>LinkedIn</p>
            <p>GitHub</p>
            <p>mail@tomaszpietrzykowski.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact

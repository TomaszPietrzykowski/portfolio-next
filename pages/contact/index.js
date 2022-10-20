import { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from '../../styles/Contact.module.css'

const Contact = () => {
  // legal consent state
  const [legalConsent, setLegalConsent] = useState(false)
  const [consentError, setConsentError] = useState(false)
  const [error, setError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  // form control
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // submit state
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // email validation
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }
  // email controller
  const sendEmail = async (name, email, message) => {
    try {
      setLoading(true)
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        '/email',
        { name, email, message },
        config
      )

      if (data.status === 'success') {
        setName('')
        setEmail('')
        setMessage('')
        setLegalConsent(false)
        setLoading(false)
        // display popup
        setSuccess(true)
        setTimeout(() => setSuccess(false), 2000)
      }
    } catch (error) {
      console.log(error)
      const errMsg =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      setError(errMsg)
      setLoading(false)
    }
  }

  // form handler
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      if (legalConsent) {
        sendEmail(name, email, message)
      } else {
        setConsentError(true)
      }
    } else {
      setEmailError(true)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Contact</h1>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor='name' className={styles.label}>
              Your name
            </label>
            <input
              type='text'
              required
              id='name'
              className={styles.text}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='email' className={styles.label}>
              Your email
            </label>
            <input
              type='email'
              required
              id='email'
              value={email}
              className={emailError ? styles.textEmailError : styles.textEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='message' className={styles.label}>
              Message
            </label>
            <textarea
              id='message'
              rows='15'
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
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
                  setConsentError(false)
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
            {loading ? (
              <div className={styles.loaderContainer}>
                <img src='/spinner.svg' className={styles.loader} />
              </div>
            ) : (
              <button type='submit' className={styles.submitBtn}>
                Send message
              </button>
            )}
          </form>
          <section className={styles.letsConnect}>
            <h2>Let's connect</h2>
            <p>
              <a
                href='https://www.linkedin.com/in/tomaszpietrzykowski/'
                target='_blank'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    className={styles.liIcon}
                    d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                  />
                </svg>
                <span>LinkedIn</span>
              </a>
            </p>
            <p>
              <a href='https://github.com/TomaszPietrzykowski' target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    className={styles.liIcon}
                    d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                  />
                </svg>
                <span>Github</span>
              </a>
            </p>
            <p>
              <a href='mailto:contact@tomaszpietrzykowski.com'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    className={styles.liIcon}
                    d='M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z'
                  />
                </svg>
                <span>contact@tomaszpietrzykowski.com</span>
              </a>
            </p>
          </section>
        </div>
      </div>
      {error && (
        <div className={styles.error} onClick={() => setError(null)}>
          <p>
            Message not sent :( <br />
            <br />
            {error}
          </p>
        </div>
      )}
      {emailError && (
        <div className={styles.error} onClick={() => setEmailError(false)}>
          <p>Insert valid email</p>
        </div>
      )}
      {success && (
        <div className={styles.success} onClick={() => setSuccess(false)}>
          <p>Message sent, thank you!</p>
        </div>
      )}
    </div>
  )
}

export default Contact

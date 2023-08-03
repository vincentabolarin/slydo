"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../styles/form.module.scss";

const Form = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  
  const accountBankRef: any = useRef();
  const accountNumberRef: any = useRef();
  const accountNameRef: any = useRef();
  const amountRef: any = useRef();
  const passCode1Ref: any = useRef();
  const passCode2Ref: any = useRef();
  const passCode3Ref: any = useRef();
  const passCode4Ref: any = useRef();
  const passCode5Ref: any = useRef();
  const passCode6Ref: any = useRef();

  const formValidityHandler = () => {
    if (
      accountBankRef.value != "" &&
      accountNumberRef.current.value != "" &&
      accountNameRef.current.value != "" &&
      amountRef.current.value != "" &&
      passCode1Ref.current.value != "" &&
      passCode2Ref.current.value != "" &&
      passCode3Ref.current.value != "" &&
      passCode4Ref.current.value != "" &&
      passCode5Ref.current.value != "" &&
      passCode6Ref.current.value != ""
    ) {
      setFormIsValid(true);
    } else setFormIsValid(false);
    console.log(formIsValid);
  }

  const numberInputHandler = (e: any) => {
    const target = e.target as HTMLInputElement;
    const val = target!.value;

    if (isNaN(Number(val))) {
      target.value = "";
      return;
    }
  }

  const passcodeInputHandler = (e: any) => {
    const target = e.target as HTMLInputElement;
    const val = target!.value;

    if (isNaN(Number(val))) {
      target.value = "";
      return;
    }

    if (val != "") {
      const next = target.nextElementSibling as HTMLInputElement;
      if (next) {
        next.focus();
      }
    }
  }

  const passcodeKeyupHandler = (e: any) => {
    const target = e.target as HTMLInputElement;
    const key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
      target!.value = "";
      const prev = target.previousElementSibling as HTMLInputElement;
      if (prev) {
        prev.focus();
      }
      return;
    }
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.heading}>Enter details to cashout</p>
        <form id="form">
          <div className={styles.detail}>
            <label htmlFor="accountBank">Account Bank</label>
            <select
              name="accountBank"
              id="accountBank"
              ref={accountBankRef}
              onChange={() => formValidityHandler()}
            >
              <option value="Select One" disabled>
                Select One
              </option>
              <option value="First Bank">First Bank</option>
              <option value="Heritage Bank">Heritage Bank</option>
              <option value="Wema">Wema</option>
              <option value="Zenith">Zenith</option>
            </select>
          </div>

          <div className={styles.detail}>
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={10}
              id="accountNumber"
              name="accountNumber"
              placeholder="0123456789"
              ref={accountNumberRef}
              onInput={numberInputHandler}
              onChange={() => formValidityHandler()}
            />
          </div>

          <div className={styles.detail}>
            <label htmlFor="accountName">Account Name</label>
            <input
              type="text"
              id="accountName"
              name="accountName"
              placeholder="Vincent Abolarin"
              ref={accountNameRef}
              onChange={() => formValidityHandler()}
            />
          </div>

          <div className={styles.detail}>
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              ref={amountRef}
              onInput={numberInputHandler}
              onChange={() => formValidityHandler()}
            />
          </div>

          <div className={styles.passcode}>
            <label htmlFor="passcodeItems">Pass Code</label>
            <div
              className={`passcodeItems ${styles.passcodeItems}`}
              id="passcodeItems"
              onInput={passcodeInputHandler}
              onKeyUp={passcodeKeyupHandler}
            >
              <input
                type="text"
                inputMode="numeric"
                className={`passcodeItem ${styles.passcodeItem}`}
                name="passcode1"
                maxLength={1}
                ref={passCode1Ref}
                onChange={() => formValidityHandler()}
              />
              <input
                type="text"
                inputMode="numeric"
                className={`passcodeItem ${styles.passcodeItem}`}
                name="passcode2"
                maxLength={1}
                ref={passCode2Ref}
                onChange={() => formValidityHandler()}
              />
              <input
                type="text"
                inputMode="numeric"
                className={`passcodeItem ${styles.passcodeItem}`}
                name="passcode3"
                maxLength={1}
                ref={passCode3Ref}
                onChange={() => formValidityHandler()}
              />
              <input
                type="text"
                inputMode="numeric"
                className={`passcodeItem ${styles.passcodeItem}`}
                name="passcode4"
                maxLength={1}
                ref={passCode4Ref}
                onChange={() => formValidityHandler()}
              />
              <input
                type="text"
                inputMode="numeric"
                className={`passcodeItem ${styles.passcodeItem}`}
                name="passcode5"
                maxLength={1}
                ref={passCode5Ref}
                onChange={() => formValidityHandler()}
              />
              <input
                type="text"
                inputMode="numeric"
                className={`passcodeItem ${styles.passcodeItem}`}
                name="passcode6"
                maxLength={1}
                ref={passCode6Ref}
                onChange={() => formValidityHandler()}
              />
            </div>
          </div>

          <button id="button" className="font-normal" disabled={!formIsValid}>
            Receive Money
          </button>
        </form>
      </div>
    </>
  );
}
 
export default Form;
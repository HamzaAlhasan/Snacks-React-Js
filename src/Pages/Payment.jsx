import React from "react";
import Header from "../Layout/Header";
import "../Styles/Payment.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";

function Payment() {
  const [order, setOrder] = useState(true);
  const [useCredit, setUseCredit] = useState(false);
  const itemsCart = useSelector((state) => state.cart.items);
  let totalAmount = 0;
  const Delivery = 1;
  const TotalCartAmount = itemsCart.map((item) => {
    return (totalAmount = totalAmount + item.price);
  });
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNumber, serPhoneNumber] = useState("");
  const [address, setAdress] = useState("");
  const [buildingNum, setBuildingNum] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
  const handlePay = () => {
    if (
      fname !== "" &&
      lname !== "" &&
      phoneNumber !== "" &&
      address !== "" &&
      buildingNum !== ""
    ) {
      if (phoneNumber.length <= 9) {
        setError("PhoneNumber must have 9 numbers");
      } else if (useCredit) {
        if (cardNum !== "" && date !== "" && cvv !== "") {
          setError("");
          setOrder(false);
        } else {
          setError("CardNum invalid");
        }
      } else {
        setError("");
        setOrder(false);
      }
    } else {
      setError("All fields must be not empty");
    }
  };
  return (
    <>
      <Header />
      {order ? (
        <>
          <div className="container border  border-top-0  border-dark mb-5">
            <div className="Checkouttext d-flex justify-content-center align-items-center my-5 ">
              <h2>===</h2>
              <h1>Checkout</h1>
              <h2>===</h2>
            </div>
            <div className="container">
              <div className="Paymenttext">
                <h3>Payment details</h3>
                <hr />
              </div>
              <form>
                <div className="row g-3 justify-content-center pb-3 ">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={(e) => {
                        setLname(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row g-3 justify-content-center pb-3">
                  <div className="col-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      onChange={(e) => {
                        serPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      onChange={(e) => {
                        setAdress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Building Number"
                      onChange={(e) => {
                        setBuildingNum(e.target.value);
                      }}
                    />
                  </div>
                  <div className="paymentStep">
                    <input
                      type="radio"
                      value="Cash"
                      name="paymentStep"
                      onClick={() => {
                        setUseCredit(false);
                      }}
                    />
                    <label style={{ marginLeft: "8px", marginRight: "10px" }}>
                      Cash
                    </label>
                    <input
                      type="radio"
                      value="Credit"
                      name="paymentStep"
                      onClick={() => {
                        setUseCredit(true);
                      }}
                    />
                    <label style={{ marginLeft: "8px", marginRight: "10px" }}>
                      Credit card
                    </label>
                  </div>
                </div>
                {useCredit && (
                  <div className="row justify-content-center pb-3 ">
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Card Number"
                        onChange={(e) => {
                          setCardNum(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM/YY"
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CVV"
                        onChange={(e) => {
                          setCvv(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                )}
                <div className="row g-3">
                  <div className="col-12 justify-content-center mb-4">
                    <select className="form-control">
                      <option>Amman</option>
                      <option>Zarqa</option>
                    </select>
                  </div>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </form>
              <div className="details">
                <h6>subtotal : {totalAmount} JOD</h6>
                <h6>delivery : {Delivery} JOD </h6>
                <h5>total amount : {totalAmount + Delivery} JOD</h5>
              </div>
              <div className="Button mb-4">
                <Button
                  text={useCredit ? "Pay by Credit card" : "Pay by Cash"}
                  onClick={handlePay}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="sub">
          {" "}
          <h2>
            Thank you for ordering through Snacks <br /> I wish you a happy day{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-emoji-smile"
              viewBox="0 0 16 16"
              id="IconChangeColor"
            >
              {" "}
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                id="mainIconPathAttribute"
              ></path>{" "}
              <path
                d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"
                id="mainIconPathAttribute"
              ></path>{" "}
            </svg>
          </h2>
        </div>
      )}
    </>
  );
}

export default Payment;

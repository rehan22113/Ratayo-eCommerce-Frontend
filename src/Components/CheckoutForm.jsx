import { useStripe, useElements, PaymentElement, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { toast } from "react-toastify";
import CardSection from "./CardSection";

const CheckoutForm = ({ clientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [isProcessing, setIsProcessing] = useState(false);

    const onPayment = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessing(true);
        const { error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
        if (error) {
            console.log(error);
            toast.error(`${error.message}`);
        } else {
            console.log("yeah it worked");
            toast.success(`${"yeah it worked"}`);
        }
        setIsProcessing(false);
    };

    const canSave = [].every(Boolean) && !isProcessing;

    return (
        <form onSubmit={onPayment}>
            <CardSection/>
            <button disabled={!canSave} type="submit">
                {isProcessing ? "Processing" : "Pay"}
            </button>
        </form>
    );
};

export default CheckoutForm;
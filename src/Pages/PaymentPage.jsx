import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../Components/CheckoutForm";
import { useCreatePaymentIntentMutation,useGetStripePKQuery } from "../Service/Api/PaymentApi";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const Checkout = () => {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);

    const location = useLocation();
    console.log(location.state);

    const { data } = useGetStripePKQuery(
        { f: null, q: 10 },
        {
            pollingInterval: false,
            refetchOnFocus: false,
            refetchOnMountOrArgChange: false,
        }
    );

    const [createPaymentIntent, { isLoading }] = useCreatePaymentIntentMutation();
    const getClientSecret = async () => {
        try {
            const { clientSecret } = await createPaymentIntent({}).unwrap();
            setClientSecret(clientSecret);
        } catch (err) {
            if (!err.status || !err.originalStatus) console.log("No Server Response");
            else console.log(err?.data);
        }
    };

    useEffect(() => {
        if (data) {
            setStripePromise(loadStripe(data.publishableKey));
        }
        getClientSecret();
    }, [data]);

    return (
        <>
            {stripePromise && clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm clientSecret={clientSecret} />
                </Elements>
            ) : null}
        </>
    );
};

export default Checkout;
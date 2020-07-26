import Header from "./Header";
import Head from "next/head";

export default (props) => (
    <div>
        <Head>
            <title>Share Code</title>
            <link rel="stylesheet" type="text/css" href="/css/custom.css"></link>
            {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link> */}
            <script
                src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
                crossorigin="anonymous"
            ></script>
            <script
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
                integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
                crossorigin="anonymous"
            ></script>
        </Head>
        <Header />
        <div className="m-3">{props.children}</div>
    </div>
);

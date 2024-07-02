import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import styles from "./routing.module.css";

interface IDynamicRouteProps {
  params: {
    id: string;
  };
}

const incrementParam = (number: string) => {
  if (Number(number) > 0) return (Number(number) + 1).toString();
  if (Number(number) === 0) return;
};

const decrementParam = (number: string) => {
  if (Number(number) > 0) return (Number(number) - 1).toString();
  if (Number(number) === 0) return;
};
const DynamicRoute = ({ params }: IDynamicRouteProps) => {
  return (
    <div>
      <h1 className={styles.title}>Dynamic Routes</h1>
      <p className={styles.currentRouteText}>
        Current Page Route = {params.id}
      </p>
      <div>
        Move to next dynamic page
        <Link href={incrementParam(params.id) as Url}>
          <button className={styles.button}>{incrementParam(params.id)}</button>
        </Link>
      </div>
      {Number(params.id) !== 1 && (
        <div>
          Move back to previous dynamic page
          <Link href={decrementParam(params.id) as Url}>
            <button className={styles.button}>
              {decrementParam(params.id)}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DynamicRoute;

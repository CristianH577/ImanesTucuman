import { FaMoneyBillTransfer, FaRegCreditCard, FaStore } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";
import { SiMercadopago } from "react-icons/si";
import { HiOutlineBanknotes } from "react-icons/hi2";

function Pagos() {
  const lista_pago = [
    {
      icon: HiOutlineBanknotes,
      title: "Efectivo",
    },
    {
      icon: FaMoneyBillTransfer,
      title: "Transferencia",
    },
    {
      icon: IoCardOutline,
      title: "Debito",
      commission: "3.25",
      percentage_total: "17.25",
    },
    {
      icon: FaRegCreditCard,
      title: "Credito - 1 Pago",
      commission: "6.5",
      percentage_total: "20.5",
    },
    {
      icon: FaStore,
      title: "Mercado Shops",
      commission: "4.8",
      percentage_total: "18.8",
    },
    {
      icon: SiMercadopago,
      title: "Mercado Libre",
      commission: "14.5",
      percentage_total: "28.5",
      content: (
        <ol className="list-disc">
          <li>
            Hasta $15.000: <b className="text-custom1">+$1000</b>
          </li>
          <li>
            Hasta $25.000: <b className="text-custom1">+$2000</b>
          </li>
          <li>
            Hasta $33.000: <b className="text-custom1">+$2400</b>
          </li>
        </ol>
      ),
    },
  ];

  return (
    <article>
      <ol className="list-none ps-0">
        {lista_pago.map((item, i) => (
          <li key={i}>
            <div className="flex items-center gap-2">
              <item.icon size={24} />

              <span>
                <strong>{item?.title} </strong>
                {item?.commission ? (
                  <>
                    {item?.commission}%(Comisión) +IVA+IIBB =
                    <b className="text-custom1"> +{item.percentage_total}%</b>
                  </>
                ) : null}
              </span>
            </div>

            {item?.content}
          </li>
        ))}
      </ol>

      <p className="font-size-secondary text-neutral-400">
        Los valores pueden variar.
      </p>
    </article>
  );
}

export default Pagos;

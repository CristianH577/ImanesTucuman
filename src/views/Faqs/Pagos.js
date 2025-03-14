import { FaMoneyBillTransfer, FaRegCreditCard, FaStore } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";
import { SiMercadopago } from "react-icons/si";
import { HiOutlineBanknotes } from "react-icons/hi2";

function Pagos() {
  const text_class = "text-custom1 ";

  // const impuestos = [
  //   {
  //     nombre: "IVA",
  //     valor: "8%",
  //   },
  //   {
  //     nombre: "IIBB(Tuc.)",
  //     valor: "6%",
  //   },
  // ];
  const lista_pago = [
    {
      icon: <HiOutlineBanknotes size={24} />,
      title: "Efectivo",
    },
    {
      icon: <FaMoneyBillTransfer size={24} />,
      title: "Transferencia",
    },
    {
      icon: <IoCardOutline size={24} />,
      title: "Debito",
      description: (
        <>
          +3.25%(Comisión) +IVA+IIBB = <b className={text_class}>+17.25%</b>
        </>
      ),
    },
    {
      icon: <FaRegCreditCard size={22} />,
      title: "Credito - 1 Pago",
      description: (
        <>
          +6.5%(Comisión) +IVA+IIBB = <b className={text_class}>+20.5%</b>
        </>
      ),
    },
    {
      // icon: <SiMercadopago size={24} />,
      icon: <FaStore size={24} />,
      title: "Mercado Shops",
      description: (
        <>
          +4.8%(Comisión) +IVA+IIBB = <b className={text_class}>+18.8%</b>
        </>
      ),
    },
    {
      icon: <SiMercadopago size={24} />,
      title: "Mercado Libre",
      description: (
        <>
          +14.5%(Comisión) +IVA+IIBB = <b className={text_class}>+28.5%</b>
        </>
      ),
      content: (
        <ol className="ps-12 list-disc">
          <li>
            <p>
              Hasta $12.000: <b className={text_class}>+$900</b>
            </p>
          </li>
          <li>
            <p>
              Entre $12.000-$30.000: <b className={text_class}>+$1800</b>
            </p>
          </li>
        </ol>
      ),
    },
  ];

  return (
    <section className="space-y-4">
      <article className="space-y-2">
        {/* <div className="flex flex-wrap gap-x-4 border-b w-fit pe-8 mb-1">
          <b>Impuestos:</b>

          {impuestos.map((item) => (
            <p key={item?.nombre}>
              {item?.nombre} = {item?.valor}
            </p>
          ))}
        </div> */}

        <ol className="space-y-2">
          {lista_pago.map((item, i) => (
            <li key={i}>
              <div className="flex gap-2">
                <span>{item?.icon}</span>
                <p>
                  <strong>{item?.title} </strong>
                  {item?.description}
                </p>
              </div>

              {item?.content}
            </li>
          ))}
        </ol>

        <p className="text-sm text-neutral-400 mb-4">
          Los porcentajes pueden variar
        </p>
      </article>

      <article>
        <b className="border-b w-fit pe-8">Garantía</b>

        <p>
          Los productos no son reembolsables pero pueden tienen 1 semana de
          garantía para cambios siempre y cuando no hayan sido usados y estén en
          condiciones. Esto no aplica para las tiras de imán que deben ser
          cortadas.
        </p>
      </article>

      <article>
        <b className="border-b w-fit pe-8">Pedidos grandes</b>

        <p>El stock es limitado por lo que para estos:</p>

        <ul className="list-decimal list-inside space-y-2">
          <li>Debera abonar entre un 20-40% en forma de seña.</li>
          <li>
            Dependiendo el tamaño del mismo pordria tener que abonar el envio.
            Entre $7000-$10000 aprox.
          </li>
          <li>Tiene un tiempo de entrega de 1 a 3 semanas.</li>
        </ul>
      </article>
    </section>
  );
}

export default Pagos;

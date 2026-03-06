import type { Deal } from "../types/Restaurant"

interface Props {
  deal: Deal
}

const DealCard: React.FC<Props> = ({ deal }) => {

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        marginTop: "10px"
      }}
    >

      <h3>{deal.discount}</h3>

      <strong>{deal.discount}% OFF</strong>

    </div>
  )
}

export default DealCard
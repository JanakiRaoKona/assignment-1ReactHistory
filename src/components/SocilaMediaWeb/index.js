import './index.css'

const SocilaMediaWeb = props => {
  const {webList, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = webList

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="li-container">
      <div className="medium-cont">
        <p className="time">{timeAccessed}</p>
        <div className="insta-cont">
          <img className="icon" alt="domain logo" src={logoUrl} />
          <div className="text-cont">
            <p className="heading">{title}</p>
            <p className="web-site">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default SocilaMediaWeb

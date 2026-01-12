import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileCard.css";

const ProfileCard = ({ name, weight, height, age }) => {
  return (
    <div className="d-flex justify-content-center align-items-center text-white">
      <div className="card bg-black text-white shadow-lg p-4 profile-card">
        <div className="d-flex flex-column align-items-center text-center">
          <div
            className="rounded-circle mb-3"
            style={{
              width: "100px",
              height: "100px",
              background: "#333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              border: "2px solid #555",
            }}
          >
            🧑
          </div>

          <h4 className="fw-bold">{name || "User"}</h4>

          <p className="text-secondary mb-4" style={{ fontSize: "14px" }}>
            Life App User
          </p>

          <div className="w-100 d-flex justify-content-between px-3">
            <div className="text-center">
              <p className="text-secondary mb-1">Age</p>
              <h5 className="fw-semibold">{age || "--"}</h5>
            </div>

            <div className="text-center">
              <p className="text-secondary mb-1">Weight</p>
              <h5 className="fw-semibold">{weight ? `${weight} kg` : "--"}</h5>
            </div>

            <div className="text-center">
              <p className="text-secondary mb-1">Height</p>
              <h5 className="fw-semibold">{height ? `${height} cm` : "--"}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

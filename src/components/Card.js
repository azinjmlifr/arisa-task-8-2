import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import styles from "../style/style.module.css";
import Button from "react-bootstrap/Button";

const FileCard = ({ infos, deleteFile }) => {
  return (
    <div className={styles.test}>
      <Container>
        <div>
          <Card style={{ width: "18rem" }} key={infos.id}>
            <Card.Body>
              <div className={styles.rowOfCard}>
                <div>تاریخ : </div>
                <div>{`${new Date(infos?.date).toLocaleDateString(
                  "fa-IR"
                )}`}</div>
              </div>
              <div className={styles.rowOfCard}>
                <div>شماره پرونده : </div>
                <div>{infos.fileNumber}</div>
              </div>
              <div className={styles.rowOfCard}>
                <div> وضعیت : </div>
                <div>{infos.fileStatus === false ? "تمام شده" : "ناتمام"}</div>
              </div>
              <Button
                onClick={() => deleteFile(infos.id)}
                variant="outline-danger
              "
                className={styles.deleteButton}
              >
                حذف پرونده
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default FileCard;

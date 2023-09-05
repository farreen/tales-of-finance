import React, { useState } from 'react'
import './styles.css/tofCustomCardStyles.css';
import {
    Badge,
    Button,
    Modal,
    Table,
} from "react-bootstrap"

const TofCustomCard = ({ item }) => {
    const [openModal, setOpenModal] = useState(false);
    const modalHandler = () => setOpenModal(!openModal);
    console.log("items", item)

    return (
        <>
            <div className='customCard-contanier' onClick={modalHandler}>
                <h6 className='customCard-title'>{item.category}</h6>
                <img src='https://picsum.photos/500/180' alt='card pic' className='customCard-img' />
                <div className="d-flex justify-content-between align-items-center">
                    <p className='customCard-description'>{item?.name}</p>
                    <Badge bg="primary" className="d-flex gap-2 mx-1 ">
                        View
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                            fill="#ffffff"
                        >
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </Badge>
                </div>
            </div>
            <Modal
                show={openModal}
                onHide={modalHandler}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    {item && <h4>{item.name}</h4>}
                    <Table hover>
                        <tbody>
                            {item.legal_name && (
                                <tr>
                                    <td className="fw-bold">Legal name</td>
                                    <td>{item.legal_name}</td>
                                </tr>
                            )}
                            {item.description && (
                                <tr>
                                    <td className="fw-bold">Description</td>
                                    <td>{item.description}</td>
                                </tr>
                            )}
                            {item.headquarter && (
                                <tr>
                                    <td className="fw-bold">Headquater</td>
                                    <td>{item.headquarter}</td>
                                </tr>
                            )}
                            {item && (
                                <tr>
                                    <td className="fw-bold">Business model</td>
                                    <td>{item.business_model}</td>
                                </tr>
                            )}
                            {item && (
                                <tr>
                                    <td className="fw-bold">Founding date</td>
                                    <td>{item.founding_date}</td>
                                </tr>
                            )}
                            {item && (
                                <tr>
                                    <td className="fw-bold">Employee count</td>
                                    <td>{item.employee_count}</td>
                                </tr>
                            )}
                            {item.revenue_stream && (
                                <tr>
                                    <td className="fw-bold">Revenue stream</td>
                                    <td>{item.revenue_stream}</td>
                                </tr>
                            )}
                            {item.client_segment && (
                                <tr>
                                    <td className="fw-bold">Client segment</td>
                                    <td>{item.client_segment}</td>
                                </tr>
                            )}
                            {item.target_companies && (
                                <tr>
                                    <td className="fw-bold">Target companies</td>
                                    <td>{item.target_companies}</td>
                                </tr>
                            )}
                            {item.target_geography && (
                                <tr>
                                    <td className="fw-bold">Target companies</td>
                                    <td>{item.target_geography}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={modalHandler}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TofCustomCard
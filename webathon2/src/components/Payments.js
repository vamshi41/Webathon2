// Payments.js

import React, { useState } from 'react';
import { Input, Button, DatePicker, Row, Col } from 'antd';
import { CreditCardOutlined, CalendarOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import './Payments.css';

const Payments = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState(null);
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');

  const handleCardNumberChange = (e) => {
    let formattedCardNumber = e.target.value.replace(/\D/g, '').substring(0, 16);
    formattedCardNumber = formattedCardNumber.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formattedCardNumber);
  };

  const handleCVVChange = (e) => {
    let formattedCVV = e.target.value.replace(/\D/g, '').substring(0, 3);
    setCVV(formattedCVV);
  };

  const handlePayment = () => {
    // Handle payment logic here
    alert('Processing payment...');
    console.log('Processing payment...');
  };

  return (
    <div className="payment-container">
      <div className="left-half">
        <h2>Pay securely with Confidence!</h2>
        <CreditCardOutlined style={{ fontSize: '64px', color: '#fff' }} />
      </div>
      <div className="right-half">
        <h2>Secure Payment Gateway</h2>
        <Input
          className="input-field"
          placeholder="Card Number"
          prefix={<CreditCardOutlined />}
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
        <Row gutter={16}>
          <Col span={12}>
            <DatePicker
              className="input-field"
              placeholder="Expiry Date"
              format="MM/YYYY"
              value={expiryDate}
              onChange={(value) => setExpiryDate(value)}
              suffixIcon={<CalendarOutlined />}
            />
          </Col>
          <Col span={12}>
            <Input
              className="input-field"
              placeholder="CVV"
              prefix={<LockOutlined />}
              value={cvv}
              onChange={handleCVVChange}
              type="password"
            />
          </Col>
        </Row>
        <Input
          className="input-field"
          placeholder="Name"
          prefix={<UserOutlined />}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="primary" className="pay-button" onClick={handlePayment}>
          Pay Now
        </Button>
        <h1>Your cost: 56$</h1>
      </div>
    </div>
  );
};

export default Payments;
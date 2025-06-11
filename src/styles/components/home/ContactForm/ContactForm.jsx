import React from 'react';
import { useState, useEffect } from 'react';
import './ContactForm.scss';
import AnimatedButton from '../../btn/AnimatedButton';

// 成功的打勾圖示 (SVG)
const SuccessIcon = () => (
  <svg className="notification-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
    <circle className="notification-icon-circle" cx="26" cy="26" r="25" fill="none"/>
    <path className="notification-icon-checkmark" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
  </svg>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setNotificationMessage(`感謝您的留言, ${formData.name}！我們將盡快與您聯繫。`);
    setShowNotification(true);

    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <div className="contact-container">

      {/* --- 全螢幕置中提示框 --- */}
      {showNotification && (
        <div className="notification-overlay" onClick={() => setShowNotification(false)}>
          <div className="notification-modal" onClick={(e) => e.stopPropagation()}>
            <SuccessIcon />
            <h2>成功送出！</h2>
            <p>{notificationMessage}</p>
            <button 
              className="notification-close-btn" 
              onClick={() => setShowNotification(false)}
            >
              關閉
            </button>
          </div>
        </div>
      )}

      <div className="contact-info">
        <h2>預約您的 NovaNest</h2>
        <h1>智慧生活顧問</h1>
      </div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder=" " required />
            <label htmlFor="name">姓名：</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " required />
            <label htmlFor="email">Email：</label>
          </div>
        </div>
        <div className="form-group">
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder=" " required ></textarea>
          <label htmlFor="message">留言：</label>
        </div>
        <div className="form-actions">
          <AnimatedButton type="submit" className="btn-homebtn">送出</AnimatedButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
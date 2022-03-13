import React from 'react';
import { Routes } from 'react-router';
import { Navigate, Route } from 'react-router-dom';
import ManageAccountPage from '../private/ManageAccountPage';
import BillSplittingPage from '../private/BillSplittingPage';
import HomePage from '../public/HomePage';

interface AuthenticatedRoutesProps {}

const AuthenticatedRoutes: React.FC<AuthenticatedRoutesProps> = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="account" element={<ManageAccountPage />} />
      <Route path="bill" element={<BillSplittingPage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default AuthenticatedRoutes;

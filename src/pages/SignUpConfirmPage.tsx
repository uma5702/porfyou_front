import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpConfirmPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">메일 인증을 완료해주세요!</h1>
      <p className="mb-4">가입하신 이메일로 인증 링크가 발송되었습니다.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2">로그인 하러가기</Link>
    </div>
  );
}

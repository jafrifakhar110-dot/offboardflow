'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', email: 'john@company.com', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', email: 'jane@company.com', department: 'Sales' },
    { id: 3, name: 'Bob Wilson', email: 'bob@company.com', department: 'Marketing' },
  ]);
  const [offboarding, setOffboarding] = useState<number | null>(null);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  const handleOffboard = async (employeeId: number, employeeEmail: string) => {
    if (!confirm(`Offboard ${employeeEmail}? This will revoke all access.`)) return;
    
    setOffboarding(employeeId);
    
    // Simulate API call (real Google integration coming next)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert(`✅ Offboarded ${employeeEmail}`);
    setEmployees(employees.filter(e => e.id !== employeeId));
    setOffboarding(null);
  };

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">OffboardFlow</h1>
          <div className="text-sm text-gray-600">
            {user?.primaryEmailAddress?.emailAddress}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Employee Offboarding</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
            + Add Employee
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 text-sm text-gray-900">{employee.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{employee.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{employee.department}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleOffboard(employee.id, employee.email)}
                      disabled={offboarding === employee.id}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 disabled:bg-gray-400"
                    >
                      {offboarding === employee.id ? 'Offboarding...' : 'Offboard'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {employees.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow mt-6">
            <p className="text-gray-500">No active employees. Add employees to start offboarding.</p>
          </div>
        )}

        <div className="mt-8 bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
          <strong>⚠️ Demo Mode:</strong> Offboarding is simulated. Next step: Connect Google Workspace for real access revocation.
        </div>
      </div>
    </div>
  );
}
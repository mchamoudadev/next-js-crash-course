import React from 'react';

const Loading = () => {
    return (
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">    <tbody>
                        <thead>
                        </thead>

                        {[1, 2].map(_ => (
                            <tr className=''>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium text-right sm:pr-0">
                                    <div className="h-4 bg-gray-200 rounded w-24 inline-block mr-4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-24 inline-block"></div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

};

export default Loading;
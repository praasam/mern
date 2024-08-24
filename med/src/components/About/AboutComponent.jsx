import React from 'react';
import ListViewComponent from '../ListView/ListViewComponent';
import TodoComponents from '../ToDo/TodoComponents';
import LifeCycleComponent from '../../ReactLifecycle/LifeCycleComponent';

const AboutComponent = () => {
    const listItems = ['Item 1', 'Item 2', 'Item 3'];
    
    return (
        

        <div className="flex flex-col items-center justify-center h-full">
            <div className="max-w-md w-full mb-8 mt-10 ">
                <TodoComponents />
            </div>

            {/* <div className="bg-white border border-blue-600 font-semibold shadow-lg rounded-lg p-6 max-w-md w-full mb-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">List View</h2>
                <ListViewComponent items={listItems} />
            </div>            */}
            <LifeCycleComponent/>
        </div>
    );
}

export default AboutComponent;

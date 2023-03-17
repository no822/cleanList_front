import React from 'react';
import {useAppSelector} from "../../../store/hooks";
import {cleaningAction, selectCleanings} from "../../../store/cleaningSlice";
import Layout from "../../../components/layout/Layout";

const Index = () => {
    const cleanings = useAppSelector(selectCleanings);
    console.log('redux values', cleanings);
    return (
        <Layout>
            todo list
        </Layout>
    );
};

export default Index;

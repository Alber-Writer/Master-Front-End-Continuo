import { useEffect, useState } from 'react';
import { IDetailTask } from '../view-model/order.vm.model';

export function useDetailsForm(initialList: IDetailTask[]) {
  const [list, setList] = useState(initialList);
  const [formResets, setFormResets] = useState<number>(0);

  useEffect(() => {
    setList(initialList);
  }, [initialList, formResets]);


  const handleDetailTasks = (id: string, propToUpdate: keyof IDetailTask) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const setDataType = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.type === 'checkbox') return e.target.checked;
      if (e.target.type === 'text')
        return e.target.value.replace(',', '.').replace('€', '') || 0;
    };

    setList(
      list.map((d: IDetailTask) => {
        if (id === d.detailId)
          return {
            ...d,
            ...{
              [propToUpdate]: setDataType(e),
            },
          };
        return d;
      })
    );
  };

  const handleCancelDetailsTasks = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormResets(reset => ++reset);
  };

  return {
    handleDetailTasks,
    handleCancelDetailsTasks,
    list,
  };
}

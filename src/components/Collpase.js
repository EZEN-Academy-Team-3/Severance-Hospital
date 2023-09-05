import React, { memo, useCallback} from 'react';
import styled from 'styled-components';

const CollapseContainer = styled.div`
    margin: 10px;
    margin-left: 20px;
    .collapse-title {
        cursor: pointer;
        width: 100%;
        border: none;
        font-weight: bold;
        text-align: left;
        outline: none;
        font-size: 15px;

        &.active, &:hover {
            color: #0094fb;
        }
    }

    .collapse-content {
        width: 100%;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        margin-left: 10px;

        .collapse-department {
            cursor: pointer;

            &.active, &:hover {
                color: #0094fb;
            }
        }
    }
`;

const Collapse = memo(({title, department}) => {
    const onCollapseTitleClick = useCallback((e) => {
        e.preventDefault();

        // (1) 모든 .content의 maxHeight를 null로 변경하여 닫기
        document.querySelectorAll('.collapse-content').forEach((v1, i1) => {
            v1.style.maxHeight = null;
        });
        
        // 클릭된 자기 자신
        const current = e.currentTarget;

        // 스스로에게 active클래스에 대한 적용 여부 변경
        current.classList.toggle('active');

        // (2) 클릭된 자기 자신을 제외한 모든 제목에서 ".active" 클래스 제거
        document.querySelectorAll('.collapse-title').forEach((v2, i2) => {
            if(v2 !== current) {
                v2.classList.remove('active');
            }
        });

        // 제어할 대항을 탐색
        const content = current.parentElement.querySelector('.collapse-content');

        // (3) 클릭한 제목에 ".active" 클래스가 적용되어 있지 않다면? 
        if(!(current.classList.contains('active'))) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }, []);

    // 병원 내 부서 클릭 이벤트
    const onCollapseDepartmentClick = useCallback((e) => {
        e.preventDefault();

        const currentDepartment = e.target;

        // 스스로에게 active클래스에 대한 적용 여부 변경
        currentDepartment.classList.toggle('active');

        // 선택된 병원 제외하고 active 클래스 제거
        document.querySelectorAll('.collapse-department').forEach((v3, i3) => {
            if(v3 !== currentDepartment) {
                v3.classList.remove('active');
            }
        });

        /** active 클래스 적용되어있다면 해당 병원 data 받아와서  보여주기 */

    }, []);

    return (
            <CollapseContainer>
                <h2 className='collapse-title' onClick={onCollapseTitleClick}>{title}</h2>
                <div className='collapse-content'>
                {department.map((department, i) => 
                    <p className='collapse-department' onClick={onCollapseDepartmentClick}>{department}</p>
                )}
                </div>
            </CollapseContainer>
    );
});

export default Collapse;

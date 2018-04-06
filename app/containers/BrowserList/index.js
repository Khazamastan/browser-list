import React from 'react';
import styled from 'styled-components';

const COUNT = 10;
const Td = styled.td`
    position : relative;
    vertical-align : top;
    text-align : center;
    border-right : 1px solid #ddd;
    width : ${props => props.width + '%' };
    > div{
        padding : 0 16px;
        line-height: 30px;
        display: block;
        text-decoration: none;
        color: inherit;
        font-size: 14px;
        &:hover{
            cursor : pointer;
            background-color: #91d5ff;
        }
    }
    .version{
        width: 150px;
    }
`;

const Th = styled.th`
    text-align : center;
    height: 37px;
    text-align: center;
    background-color: #f6f6f6;
    font-size: 14px;
    font-weight: 600;
    text-transform : capitalize;
    border-bottom: 1px solid #ddd;
    width : ${props => props.width + '%' };
    > div{
        padding : 0 16px;
        line-height: 30px;
        display: block;
        text-decoration: none;
        color: inherit;
        font-size: inherit;
    }
`;

const Table = styled.table`
    width : 100%;
    table-layout: fixed;
    height : 100%;
`
const Latest = styled.a`
    position: absolute;
    color: #009cfc;
    top: 1px;
    text-transform: capitalize;
    font-size: 12px;
    padding-left: 3px;
`

const LoadMore = styled.a`
    display : inline-block;
    margin-top : 10px;
    color: #009cfc;
`
const ListWrapper = styled.div`
    height : 100%;
`
export default class Windows extends React.PureComponent {
    render(){
        return <ListWrapper>
            <Table>
            <thead>
            <tr>
                 {
                    Object.keys(this.props.osVersionData).map((os) => {
                            return (<Th key={os}>
                                        <span>{os}</span>
                                    </Th>);
                    })
                }
                
            </tr>
            </thead>
            <tbody>
                <tr>
                    {
                        Object.keys(this.props.osVersionData).map((os) => {
                            var sorted = this.props.osVersionData[os].reverse().slice(0,COUNT);
                            const items = sorted.map((item,i) => {
                                const versionText = item.split('_')[0];
                                const latestText = (i == 0) ? <Latest>Latest</Latest> : null;
                                const browserVersion = this.props.browserVersion;
                                if(browserVersion == "realios" || browserVersion == "realdroid"){
                                    const name = versionText.split("-")[0];
                                    const version = versionText.split("-")[1];
                                    return(<div  key={item} className="clearfix">
                                            <span className="pull-left">{name}</span>
                                            <span className="pull-right version">{version}</span>
                                        </div>)
                                }

                                return (<div  key={item}>
                                        <span>{versionText}{latestText}</span>
                                        </div>
                                    );

                            });
                            const count = this.props.osVersionData[os].length;
                            if ( count > COUNT) {
                                const moreText = (count - COUNT) + " more";
                                items.push(<div  key={"more"}>
                                        <LoadMore>{moreText}</LoadMore>
                                    </div>
                                    );
                            }

                            return (<Td width={(100/this.props.osVersionData[os].length)} key={os}>
                                    {items}
                                    </Td>
                                );
                        })
                    }
                </tr>
            </tbody>
            </Table>
        </ListWrapper>
    }
}
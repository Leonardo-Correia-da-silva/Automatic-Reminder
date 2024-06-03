import './App.css';
import login from '../src/assets/Login.png';
import update from '../src/assets/update.png';
import select from '../src/assets/select-from.png';
import proced1 from '../src/assets/proced1.png';
import proced2 from '../src/assets/proced2.png';
import proced3 from '../src/assets/proced3.png';
import proced4 from '../src/assets/proced4.png';
import proced5 from '../src/assets/proced5.png';
import proced6 from '../src/assets/proced6.png';
import proced7 from '../src/assets/proced7.png';
import logo1 from '../src/assets/favicon.ico';



function App() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="App">
            <header className='div-logo'>
                <img className='logo1' src={logo1} alt="Logo 1" />
               
                <h1 className='titulo'>Aviso de Vencimento Automático - Contas a Receber</h1>
            </header>

            <button className='button' onClick={scrollToTop}>Voltar ao Início</button>

            <h3>CONFIGURANDO COMANDOS "UPDATE" e "SELECT * FROM" NO SQL SERVER</h3>
            <p>&bull; Inserir comandos com o número do usuário, pois é para este destinatário que o email de aviso vai ser enviado (conforme exemplo abaixo):</p>
            <img className='comando' src={update} alt="Login" /> <br></br>
            <img className='comando2' src={select} alt="Login" />

           

            <h3>APÓS INSERIR COMANDOS, ENTRE NO SISTEMA ERP_CLIENT E FAÇA LOGIN PARA CONFIGURAR O EMAIL AUTOMÁTICO</h3>
            <p>&bull; Entre no sistema ERP Client, faça o login com seu usuário CNE + Alt16 para ser direcionado ao ambiente do sistema! (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={login} alt="Login" />

            <h3>PROCESSO DE CONFIGURAÇÃO</h3>
            <p>&bull; Entre na area "Cadastro / principal / ocorrência / texto ocorrência" (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced1} alt="Procedimento 3" />

            <h3>BUSCANDO ITENS</h3>
            <p>&bull; Selecione o filtro "todos" e ao lado selecione o ícone "pesquisar" (binóculo), para que os itens sejam tragos<br /></p>
            <img className='img-proced-1' src={proced2} alt="Procedimento 4" />

            <h3>SELECIONANDO O ÍTEM "ENVIO_BOLETO_AUTOMÁTICO"</h3>
            <p>&bull; Aperte 2x com o botão esquerdo do mouse no item "ENVIO_BOLETO_AUTOMÁTICO" (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced3} alt="Procedimento 5" />

            <h3> EXEMPLO DE COMO FICARÁ EM MODO FICHA:</h3>
            <img className='img-proced-1' src={proced4} alt="Procedimento 1" />

            <h3>CORPO DO EMAIL MONTADO</h3>
            <p>&bull; No "corpo" será a area onde o email vai ser estruturado, com as datas, números e valores, que serão inseridos automaticamente. (conforme exemplo abaixo)</p>
            <img className='img-proced-1' src={proced5} alt="Procedimento 6" />

            <h3>CONFIGURANDO QUANTIDADE DE DIAS ANTERIORMENTE AO VENCIMENTO QUE O BOLETO SERÁ ENVIADO</h3>
            <p>&bull; Na parte "Email Aviso", colocaremos o limite da quantidade de dias anteriormente a data de vencimento, que o email de aviso será enviado</p>
            <p>&bull; Como este exemplo é de teste, colocamos como opção 2 "Homologação", mas utilizaremos a opção 1 "Produção" (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced6} alt="Procedimento 3" />

            <h3>ESTRUTURA DO EMAIL JÁ ENVIADO</h3>
            <p>&bull; Neste exemplo, um email de aviso montado foi enviado para a Vanessa, onde podemos ver que as datas, números e valores, <br></br> foram inseridos conforme informações do boleto.</p>
            <img className='img-proced-1' src={proced7} alt="Procedimento 3" />

        </div>
    )
};

export default App;


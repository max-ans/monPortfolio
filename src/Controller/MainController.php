<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Swift_Mailer;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="home_page")
     */
    public function showHome(): Response
    {
        return $this->render('main/index.html.twig', []);
    }

    /**
     * @Route("/send", name="home_page_send")
     *
     * @param Request $request
     * @param \Swift_Mailer $mailer
     * @return void
     */
    public function sendMail(Request $request, \Swift_Mailer $mailer) {
        

        $message = (new \Swift_Message('Contact depuis portfolio'))
                ->setFrom($request->request->get('form__input'))
                ->setTo('royer.maxence.dev@gmail.com')
                ->setBody(
                    $this->renderView(
                        'mail/email.html.twig',
                        [
                            'mail' => $request->request->get('form__input'),
                            'message' => $request->request->get('form__textarea'),
                        ]
                    ),
                    'text/html'
                );

        $this->addFlash('success' ,  'Votre message a bien été envoyé');

        $mailer->send($message);

        return $this->redirect('/#contact');
        
    }
}

<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * This is a dummy entity. Remove it!
 */
#[ApiResource]
#[ORM\Entity]
class Greeting
{
    /**
     * A nice person.
     */
    #[Assert\NotBlank]
    #[ORM\Column]
    public string $name = '';
    /**
     * The entity ID.
     */
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue(strategy: 'SEQUENCE')]
    #[ORM\Id]
    private ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
